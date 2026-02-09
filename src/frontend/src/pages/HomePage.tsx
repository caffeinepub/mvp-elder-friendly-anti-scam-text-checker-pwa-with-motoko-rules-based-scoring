import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Shield, AlertTriangle } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { useAntiFraudActors } from '@/hooks/useAntiFraudActors';
import { CollaborativeResultCard } from '@/components/CollaborativeResultCard';
import { DashboardQuickActions } from '@/components/DashboardQuickActions';
import type { LookupResult } from '@/ic/idl/reports.idl';

export function HomePage() {
  const { t, language } = useI18n();
  const { mainActor, reportsActor } = useAntiFraudActors();

  const [activeTab, setActiveTab] = useState('message');
  const [messageText, setMessageText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [cryptoText, setCryptoText] = useState('');

  const [messageAnalyzing, setMessageAnalyzing] = useState(false);
  const [messageResult, setMessageResult] = useState<string>('');
  const [messageError, setMessageError] = useState('');

  const [emailChecking, setEmailChecking] = useState(false);
  const [emailResult, setEmailResult] = useState<LookupResult | null>(null);
  const [emailError, setEmailError] = useState('');

  const [phoneChecking, setPhoneChecking] = useState(false);
  const [phoneResult, setPhoneResult] = useState<LookupResult | null>(null);
  const [phoneError, setPhoneError] = useState('');

  const [cryptoChecking, setCryptoChecking] = useState(false);
  const [cryptoResult, setCryptoResult] = useState<LookupResult | null>(null);
  const [cryptoError, setCryptoError] = useState('');

  const isReady = !!mainActor && !!reportsActor;

  const handleAnalyzeMessage = async () => {
    if (!messageText.trim()) {
      setMessageError(t.errorMessageEmpty);
      return;
    }

    if (!isReady || !mainActor) {
      setMessageError(t.errorBackendNotReady);
      return;
    }

    setMessageAnalyzing(true);
    setMessageError('');
    setMessageResult('');

    try {
      const result = await mainActor.analyzeText(messageText);
      setMessageResult(result);
    } catch (error: any) {
      console.error('Message analysis error:', error);
      setMessageError(t.errorAnalyzeSpecific);
    } finally {
      setMessageAnalyzing(false);
    }
  };

  const handleCheckEmail = async () => {
    if (!emailText.trim()) {
      setEmailError(t.errorEmailEmpty);
      return;
    }

    if (!isReady || !reportsActor) {
      setEmailError(t.errorBackendNotReady);
      return;
    }

    setEmailChecking(true);
    setEmailError('');
    setEmailResult(null);

    try {
      const result = await reportsActor.lookupEmail(emailText);
      if (result.length > 0 && result[0]) {
        setEmailResult(result[0]);
      } else {
        setEmailResult(null);
      }
    } catch (error: any) {
      console.error('Email check error:', error);
      setEmailError(t.errorCollaborativeLookupSpecific);
    } finally {
      setEmailChecking(false);
    }
  };

  const handleCheckPhone = async () => {
    if (!phoneText.trim()) {
      setPhoneError(t.errorPhoneEmpty);
      return;
    }

    if (!isReady || !reportsActor) {
      setPhoneError(t.errorBackendNotReady);
      return;
    }

    setPhoneChecking(true);
    setPhoneError('');
    setPhoneResult(null);

    try {
      const result = await reportsActor.lookupPhone(phoneText);
      if (result.length > 0 && result[0]) {
        setPhoneResult(result[0]);
      } else {
        setPhoneResult(null);
      }
    } catch (error: any) {
      console.error('Phone check error:', error);
      setPhoneError(t.errorCollaborativeLookupSpecific);
    } finally {
      setPhoneChecking(false);
    }
  };

  const handleCheckCrypto = async () => {
    if (!cryptoText.trim()) {
      setCryptoError(t.errorCryptoEmpty);
      return;
    }

    if (!isReady || !reportsActor) {
      setCryptoError(t.errorBackendNotReady);
      return;
    }

    setCryptoChecking(true);
    setCryptoError('');
    setCryptoResult(null);

    try {
      const result = await reportsActor.lookupCrypto(cryptoText);
      if (result.length > 0 && result[0]) {
        setCryptoResult(result[0]);
      } else {
        setCryptoResult(null);
      }
    } catch (error: any) {
      console.error('Crypto check error:', error);
      setCryptoError(t.errorCollaborativeLookupSpecific);
    } finally {
      setCryptoChecking(false);
    }
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{t.homeTitle}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.homeSubtitle}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-center">
          <DashboardQuickActions
            onCheckRisk={() => setActiveTab('message')}
            onSearchDatabase={() => setActiveTab('email')}
            onReport={() => {}}
          />
        </div>

        {/* Main Verification Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t.verificationTitle}</CardTitle>
            <CardDescription>{t.verificationDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="message">{t.tabMessage}</TabsTrigger>
                <TabsTrigger value="email">{t.tabEmail}</TabsTrigger>
                <TabsTrigger value="phone">{t.tabPhone}</TabsTrigger>
                <TabsTrigger value="crypto">{t.tabCrypto}</TabsTrigger>
              </TabsList>

              {/* Message Tab */}
              <TabsContent value="message" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="message">{t.labelMessage}</Label>
                  <Textarea
                    id="message"
                    placeholder={t.placeholderMessage}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    rows={6}
                    className="resize-none"
                  />
                </div>
                <Button
                  onClick={handleAnalyzeMessage}
                  disabled={messageAnalyzing || !isReady}
                  className="w-full"
                >
                  {messageAnalyzing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {messageAnalyzing ? t.buttonAnalyzing : t.buttonAnalyze}
                </Button>

                {messageError && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{messageError}</AlertDescription>
                  </Alert>
                )}

                {messageResult && (
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="text-lg">{t.resultTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          Análise (Português):
                        </p>
                        <p className="text-foreground whitespace-pre-wrap">{messageResult}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Email Tab */}
              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t.labelEmail}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.placeholderEmail}
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleCheckEmail}
                  disabled={emailChecking || !isReady}
                  className="w-full"
                >
                  {emailChecking && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {emailChecking ? t.buttonChecking : t.buttonCheck}
                </Button>

                {(emailResult !== null || emailError) && (
                  <CollaborativeResultCard
                    result={emailResult}
                    loading={emailChecking}
                    error={emailError}
                  />
                )}
              </TabsContent>

              {/* Phone Tab */}
              <TabsContent value="phone" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.labelPhone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t.placeholderPhone}
                    value={phoneText}
                    onChange={(e) => setPhoneText(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleCheckPhone}
                  disabled={phoneChecking || !isReady}
                  className="w-full"
                >
                  {phoneChecking && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {phoneChecking ? t.buttonChecking : t.buttonCheck}
                </Button>

                {(phoneResult !== null || phoneError) && (
                  <CollaborativeResultCard
                    result={phoneResult}
                    loading={phoneChecking}
                    error={phoneError}
                  />
                )}
              </TabsContent>

              {/* Crypto Tab */}
              <TabsContent value="crypto" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="crypto">{t.labelCrypto}</Label>
                  <Input
                    id="crypto"
                    placeholder={t.placeholderCrypto}
                    value={cryptoText}
                    onChange={(e) => setCryptoText(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleCheckCrypto}
                  disabled={cryptoChecking || !isReady}
                  className="w-full"
                >
                  {cryptoChecking && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {cryptoChecking ? t.buttonChecking : t.buttonCheck}
                </Button>

                {(cryptoResult !== null || cryptoError) && (
                  <CollaborativeResultCard
                    result={cryptoResult}
                    loading={cryptoChecking}
                    error={cryptoError}
                  />
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
