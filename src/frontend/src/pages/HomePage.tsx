import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Phone, Coins, Mail, MessageSquare, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { useAntiFraudActors } from '@/hooks/useAntiFraudActors';
import { useUserProfile } from '@/hooks/useUserProfile';
import { analyzeEmail } from '@/utils/emailHeuristics';
import { translateBackendResult } from '@/utils/translateBackendResult';
import { DashboardQuickActions } from '@/components/DashboardQuickActions';
import { CollaborativeResultCard } from '@/components/CollaborativeResultCard';
import { ReportSubmissionDialog, type ReportFormData } from '@/components/ReportSubmissionDialog';
import type { LookupResult } from '@/ic/idl/reports.idl';

export function HomePage() {
  const { t, language } = useI18n();
  const { mainActor, extraActor, reportsActor, isFetching } = useAntiFraudActors();
  const { addHistoryItem, identity } = useUserProfile();

  // Refs for scrolling
  const verificationRef = useRef<HTMLDivElement>(null);
  const collaborativeRef = useRef<HTMLDivElement>(null);

  // Report dialog state
  const [reportDialogOpen, setReportDialogOpen] = useState(false);

  // Phone tab state
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneResult, setPhoneResult] = useState<bigint | null | undefined>(undefined);
  const [phoneLoading, setPhoneLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [phoneCollaborative, setPhoneCollaborative] = useState<LookupResult | null>(null);
  const [phoneCollaborativeLoading, setPhoneCollaborativeLoading] = useState(false);
  const [phoneCollaborativeError, setPhoneCollaborativeError] = useState('');

  // Crypto tab state
  const [cryptoAddress, setCryptoAddress] = useState('');
  const [cryptoResult, setCryptoResult] = useState<bigint | null | undefined>(undefined);
  const [cryptoLoading, setCryptoLoading] = useState(false);
  const [cryptoError, setCryptoError] = useState('');
  const [cryptoCollaborative, setCryptoCollaborative] = useState<LookupResult | null>(null);
  const [cryptoCollaborativeLoading, setCryptoCollaborativeLoading] = useState(false);
  const [cryptoCollaborativeError, setCryptoCollaborativeError] = useState('');

  // Message tab state
  const [messageText, setMessageText] = useState('');
  const [messageResult, setMessageResult] = useState<string>('');
  const [messageLoading, setMessageLoading] = useState(false);
  const [messageError, setMessageError] = useState('');
  const [messageCollaborative, setMessageCollaborative] = useState<LookupResult | null>(null);
  const [messageCollaborativeLoading, setMessageCollaborativeLoading] = useState(false);
  const [messageCollaborativeError, setMessageCollaborativeError] = useState('');

  // Email tab state
  const [emailAddress, setEmailAddress] = useState('');
  const [emailResult, setEmailResult] = useState<{ category: string; reason: string } | null>(null);
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailCollaborative, setEmailCollaborative] = useState<LookupResult | null>(null);
  const [emailCollaborativeLoading, setEmailCollaborativeLoading] = useState(false);
  const [emailCollaborativeError, setEmailCollaborativeError] = useState('');

  const handleCheckPhone = async () => {
    if (!phoneNumber.trim()) {
      setPhoneError(t.errorPhoneEmpty);
      return;
    }

    if (!extraActor) {
      setPhoneError(t.errorBackendNotReady);
      return;
    }

    setPhoneLoading(true);
    setPhoneError('');
    setPhoneResult(undefined);
    setPhoneCollaborativeLoading(true);
    setPhoneCollaborativeError('');
    setPhoneCollaborative(null);

    try {
      const [extraResult, collaborativeResult] = await Promise.all([
        extraActor.getPhoneReports(phoneNumber.trim()),
        reportsActor?.lookupPhone(phoneNumber.trim()).catch(() => []),
      ]);

      setPhoneResult(extraResult);
      
      if (collaborativeResult && collaborativeResult.length > 0 && collaborativeResult[0]) {
        setPhoneCollaborative(collaborativeResult[0]);
      }

      addHistoryItem({
        type: 'phone',
        input: phoneNumber.trim(),
        timestamp: Date.now(),
      });
    } catch (error) {
      console.error('Error checking phone:', error);
      setPhoneError(t.errorCheckPhone);
      setPhoneCollaborativeError(t.errorCollaborativeLookup);
    } finally {
      setPhoneLoading(false);
      setPhoneCollaborativeLoading(false);
    }
  };

  const handleCheckCrypto = async () => {
    if (!cryptoAddress.trim()) {
      setCryptoError(t.errorCryptoEmpty);
      return;
    }

    if (!extraActor) {
      setCryptoError(t.errorBackendNotReady);
      return;
    }

    setCryptoLoading(true);
    setCryptoError('');
    setCryptoResult(undefined);
    setCryptoCollaborativeLoading(true);
    setCryptoCollaborativeError('');
    setCryptoCollaborative(null);

    try {
      const [extraResult, collaborativeResult] = await Promise.all([
        extraActor.getCryptoReports(cryptoAddress.trim()),
        reportsActor?.lookupCrypto(cryptoAddress.trim()).catch(() => []),
      ]);

      setCryptoResult(extraResult);
      
      if (collaborativeResult && collaborativeResult.length > 0 && collaborativeResult[0]) {
        setCryptoCollaborative(collaborativeResult[0]);
      }

      addHistoryItem({
        type: 'crypto',
        input: cryptoAddress.trim(),
        timestamp: Date.now(),
      });
    } catch (error) {
      console.error('Error checking crypto:', error);
      setCryptoError(t.errorCheckCrypto);
      setCryptoCollaborativeError(t.errorCollaborativeLookup);
    } finally {
      setCryptoLoading(false);
      setCryptoCollaborativeLoading(false);
    }
  };

  const handleAnalyzeMessage = async () => {
    if (!messageText.trim()) {
      setMessageError(t.errorMessageEmpty);
      return;
    }

    if (!mainActor) {
      setMessageError(t.errorBackendNotReady);
      return;
    }

    setMessageLoading(true);
    setMessageError('');
    setMessageResult('');
    setMessageCollaborativeLoading(true);
    setMessageCollaborativeError('');
    setMessageCollaborative(null);

    try {
      const [analysisResult, collaborativeResult] = await Promise.all([
        mainActor.analyzeText(messageText.trim()),
        reportsActor?.lookupMessage(messageText.trim()).catch(() => []),
      ]);

      setMessageResult(analysisResult);
      
      if (collaborativeResult && collaborativeResult.length > 0 && collaborativeResult[0]) {
        setMessageCollaborative(collaborativeResult[0]);
      }

      addHistoryItem({
        type: 'message',
        input: messageText.trim(),
        timestamp: Date.now(),
        result: analysisResult,
      });
    } catch (error) {
      console.error('Error analyzing message:', error);
      setMessageError(t.errorAnalyzeMessage);
      setMessageCollaborativeError(t.errorCollaborativeLookup);
    } finally {
      setMessageLoading(false);
      setMessageCollaborativeLoading(false);
    }
  };

  const handleCheckEmail = async () => {
    if (!emailAddress.trim()) {
      setEmailError(t.errorEmailEmpty);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress.trim())) {
      setEmailError(t.errorEmailInvalid);
      return;
    }

    setEmailLoading(true);
    setEmailError('');
    setEmailResult(null);
    setEmailCollaborativeLoading(true);
    setEmailCollaborativeError('');
    setEmailCollaborative(null);

    try {
      const result = analyzeEmail(emailAddress.trim());
      setEmailResult(result);

      const collaborativeResult = await reportsActor?.lookupEmail(emailAddress.trim()).catch(() => []);
      if (collaborativeResult && collaborativeResult.length > 0 && collaborativeResult[0]) {
        setEmailCollaborative(collaborativeResult[0]);
      }

      addHistoryItem({
        type: 'email',
        input: emailAddress.trim(),
        timestamp: Date.now(),
        result: result.category,
      });
    } catch (error) {
      console.error('Error checking email:', error);
      setEmailCollaborativeError(t.errorCollaborativeLookup);
    } finally {
      setEmailLoading(false);
      setEmailCollaborativeLoading(false);
    }
  };

  const handleReportSubmit = async (data: ReportFormData) => {
    if (!reportsActor) {
      throw new Error(t.errorBackendNotReady);
    }

    const success = await reportsActor.submitReport({
      reportType: data.reportType,
      value: data.value,
      category: data.category,
      country: data.country,
      description: data.description ? [data.description] : [],
    });

    if (!success) {
      throw new Error(t.errorReportSubmission);
    }
  };

  const handleQuickActionCheckRisk = () => {
    verificationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleQuickActionSearchDatabase = () => {
    collaborativeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleQuickActionReport = () => {
    setReportDialogOpen(true);
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{t.checkScamReports}</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.searchDescription}
          </p>
        </div>

        {/* Quick Actions */}
        <DashboardQuickActions
          onCheckRisk={handleQuickActionCheckRisk}
          onSearchDatabase={handleQuickActionSearchDatabase}
          onReport={handleQuickActionReport}
        />

        {/* Verification Section */}
        <div ref={verificationRef}>
          <Tabs defaultValue="message" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="message" className="text-xs sm:text-sm">
                <MessageSquare className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.tabMessage}</span>
                <span className="sm:hidden">{t.tabMessageShort}</span>
              </TabsTrigger>
              <TabsTrigger value="phone" className="text-xs sm:text-sm">
                <Phone className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.tabPhone}</span>
                <span className="sm:hidden">{t.tabPhoneShort}</span>
              </TabsTrigger>
              <TabsTrigger value="crypto" className="text-xs sm:text-sm">
                <Coins className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.tabCrypto}</span>
                <span className="sm:hidden">{t.tabCryptoShort}</span>
              </TabsTrigger>
              <TabsTrigger value="email" className="text-xs sm:text-sm">
                <Mail className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.tabEmail}</span>
                <span className="sm:hidden">{t.tabEmailShort}</span>
              </TabsTrigger>
            </TabsList>

            {/* Message Tab */}
            <TabsContent value="message">
              <Card>
                <CardHeader>
                  <CardTitle>{t.messageLabel}</CardTitle>
                  <CardDescription>{t.messageDescription}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="message">{t.messageLabel}</Label>
                    <Textarea
                      id="message"
                      placeholder={t.messagePlaceholder}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      disabled={messageLoading || isFetching}
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  <Button
                    onClick={handleAnalyzeMessage}
                    disabled={messageLoading || isFetching}
                    className="w-full"
                  >
                    {messageLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t.analyzing}
                      </>
                    ) : (
                      t.analyzeButton
                    )}
                  </Button>

                  {messageError && (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>{messageError}</AlertDescription>
                    </Alert>
                  )}

                  {messageResult && !messageError && (
                    <div className="space-y-4">
                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>{t.originalResult}</AlertTitle>
                        <AlertDescription className="mt-2 whitespace-pre-wrap">
                          {messageResult}
                        </AlertDescription>
                      </Alert>

                      {language !== 'pt' && (
                        <Alert>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertTitle>{t.translatedResult}</AlertTitle>
                          <AlertDescription className="mt-2 whitespace-pre-wrap">
                            {translateBackendResult(messageResult, language)}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  )}

                  <div ref={collaborativeRef}>
                    <CollaborativeResultCard
                      result={messageCollaborative}
                      loading={messageCollaborativeLoading}
                      error={messageCollaborativeError}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Phone Tab */}
            <TabsContent value="phone">
              <Card>
                <CardHeader>
                  <CardTitle>{t.tabPhone}</CardTitle>
                  <CardDescription>{t.phoneDescription}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phoneLabel}</Label>
                    <Input
                      id="phone"
                      type="text"
                      placeholder={t.phonePlaceholder}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      disabled={phoneLoading || isFetching}
                    />
                  </div>
                  <Button
                    onClick={handleCheckPhone}
                    disabled={phoneLoading || isFetching}
                    className="w-full"
                  >
                    {phoneLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t.checkingPhone}
                      </>
                    ) : (
                      t.checkPhoneButton
                    )}
                  </Button>

                  {phoneError && (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>{phoneError}</AlertDescription>
                    </Alert>
                  )}

                  {phoneResult !== undefined && !phoneError && (
                    <Alert variant={phoneResult === null ? 'default' : 'destructive'}>
                      {phoneResult === null ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          <AlertDescription>{t.phoneNotReported}</AlertDescription>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            {t.phoneReported.replace('{count}', phoneResult.toString())}
                          </AlertDescription>
                        </>
                      )}
                    </Alert>
                  )}

                  <CollaborativeResultCard
                    result={phoneCollaborative}
                    loading={phoneCollaborativeLoading}
                    error={phoneCollaborativeError}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Crypto Tab */}
            <TabsContent value="crypto">
              <Card>
                <CardHeader>
                  <CardTitle>{t.tabCrypto}</CardTitle>
                  <CardDescription>{t.cryptoDescription}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="crypto">{t.cryptoLabel}</Label>
                    <Input
                      id="crypto"
                      type="text"
                      placeholder={t.cryptoPlaceholder}
                      value={cryptoAddress}
                      onChange={(e) => setCryptoAddress(e.target.value)}
                      disabled={cryptoLoading || isFetching}
                    />
                  </div>
                  <Button
                    onClick={handleCheckCrypto}
                    disabled={cryptoLoading || isFetching}
                    className="w-full"
                  >
                    {cryptoLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t.checkingCrypto}
                      </>
                    ) : (
                      t.checkCryptoButton
                    )}
                  </Button>

                  {cryptoError && (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>{cryptoError}</AlertDescription>
                    </Alert>
                  )}

                  {cryptoResult !== undefined && !cryptoError && (
                    <Alert variant={cryptoResult === null ? 'default' : 'destructive'}>
                      {cryptoResult === null ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          <AlertDescription>{t.cryptoNotReported}</AlertDescription>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            {t.cryptoReported.replace('{count}', cryptoResult.toString())}
                          </AlertDescription>
                        </>
                      )}
                    </Alert>
                  )}

                  <CollaborativeResultCard
                    result={cryptoCollaborative}
                    loading={cryptoCollaborativeLoading}
                    error={cryptoCollaborativeError}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Email Tab */}
            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardTitle>{t.tabEmail}</CardTitle>
                  <CardDescription>{t.emailDescription}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.emailLabel}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      disabled={emailLoading}
                    />
                  </div>
                  <Button
                    onClick={handleCheckEmail}
                    disabled={emailLoading}
                    className="w-full"
                  >
                    {emailLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t.checkingEmail}
                      </>
                    ) : (
                      t.checkEmailButton
                    )}
                  </Button>

                  {emailError && (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>{emailError}</AlertDescription>
                    </Alert>
                  )}

                  {emailResult && !emailError && (
                    <Alert variant={emailResult.category === 'safe' ? 'default' : 'destructive'}>
                      {emailResult.category === 'safe' ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          <AlertTitle>{t.emailSafe}</AlertTitle>
                          <AlertDescription className="mt-2">
                            {t[`emailReason_${emailResult.reason}` as keyof typeof t] || emailResult.reason}
                          </AlertDescription>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertTitle>{t.emailFlagged}</AlertTitle>
                          <AlertDescription className="mt-2">
                            {t[`emailReason_${emailResult.reason}` as keyof typeof t] || emailResult.reason}
                          </AlertDescription>
                        </>
                      )}
                    </Alert>
                  )}

                  <CollaborativeResultCard
                    result={emailCollaborative}
                    loading={emailCollaborativeLoading}
                    error={emailCollaborativeError}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Report Submission Dialog */}
      <ReportSubmissionDialog
        open={reportDialogOpen}
        onOpenChange={setReportDialogOpen}
        onSubmit={handleReportSubmit}
      />
    </main>
  );
}
