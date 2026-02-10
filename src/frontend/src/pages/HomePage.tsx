import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { PwaInstallAction } from '@/components/PwaInstallAction';
import { StructuredAnalysisResultCard } from '@/components/StructuredAnalysisResultCard';
import { 
  analyzeMessage, 
  analyzeEmail, 
  analyzePhone, 
  analyzeCrypto,
  type StructuredAnalysisResult 
} from '@/utils/structuredFraudAnalysis';

export function HomePage() {
  const { t, language } = useI18n();

  const [activeTab, setActiveTab] = useState('message');
  const [messageText, setMessageText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [cryptoText, setCryptoText] = useState('');

  const [messageResult, setMessageResult] = useState<StructuredAnalysisResult | null>(null);
  const [messageError, setMessageError] = useState('');

  const [emailResult, setEmailResult] = useState<StructuredAnalysisResult | null>(null);
  const [emailError, setEmailError] = useState('');

  const [phoneResult, setPhoneResult] = useState<StructuredAnalysisResult | null>(null);
  const [phoneError, setPhoneError] = useState('');

  const [cryptoResult, setCryptoResult] = useState<StructuredAnalysisResult | null>(null);
  const [cryptoError, setCryptoError] = useState('');

  const handleAnalyzeMessage = () => {
    if (!messageText.trim()) {
      setMessageError(t.errorMessageEmpty);
      setMessageResult(null);
      return;
    }

    setMessageError('');
    const result = analyzeMessage(messageText, language);
    setMessageResult(result);
  };

  const handleCheckEmail = () => {
    if (!emailText.trim()) {
      setEmailError(t.errorEmailEmpty);
      setEmailResult(null);
      return;
    }

    setEmailError('');
    const result = analyzeEmail(emailText, language);
    setEmailResult(result);
  };

  const handleCheckPhone = () => {
    if (!phoneText.trim()) {
      setPhoneError(t.errorPhoneEmpty);
      setPhoneResult(null);
      return;
    }

    setPhoneError('');
    const result = analyzePhone(phoneText, language);
    setPhoneResult(result);
  };

  const handleCheckCrypto = () => {
    if (!cryptoText.trim()) {
      setCryptoError(t.errorCryptoEmpty);
      setCryptoResult(null);
      return;
    }

    setCryptoError('');
    const result = analyzeCrypto(cryptoText, language);
    setCryptoResult(result);
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {t.homeTitle}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.homeSubtitle}
          </p>
        </div>

        {/* PWA Install Action */}
        <div className="flex justify-center">
          <PwaInstallAction />
        </div>

        {/* Verification Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t.verificationTitle}</CardTitle>
            <CardDescription>{t.verificationDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="message">{t.tabMessage}</TabsTrigger>
                <TabsTrigger value="email">{t.tabEmail}</TabsTrigger>
                <TabsTrigger value="phone">{t.tabPhone}</TabsTrigger>
                <TabsTrigger value="crypto">{t.tabCrypto}</TabsTrigger>
              </TabsList>

              {/* Message Tab */}
              <TabsContent value="message" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="message-input">{t.labelMessage}</Label>
                  <Textarea
                    id="message-input"
                    placeholder={t.placeholderMessage}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    rows={6}
                    className="resize-none"
                  />
                </div>
                {messageError && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{messageError}</AlertDescription>
                  </Alert>
                )}
                <Button onClick={handleAnalyzeMessage} className="w-full">
                  {t.buttonAnalyze}
                </Button>
                {messageResult && <StructuredAnalysisResultCard result={messageResult} />}
              </TabsContent>

              {/* Email Tab */}
              <TabsContent value="email" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email-input">{t.labelEmail}</Label>
                  <Input
                    id="email-input"
                    type="email"
                    placeholder={t.placeholderEmail}
                    value={emailText}
                    onChange={(e) => setEmailText(e.target.value)}
                  />
                </div>
                {emailError && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{emailError}</AlertDescription>
                  </Alert>
                )}
                <Button onClick={handleCheckEmail} className="w-full">
                  {t.buttonCheck}
                </Button>
                {emailResult && <StructuredAnalysisResultCard result={emailResult} />}
              </TabsContent>

              {/* Phone Tab */}
              <TabsContent value="phone" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="phone-input">{t.labelPhone}</Label>
                  <Input
                    id="phone-input"
                    type="tel"
                    placeholder={t.placeholderPhone}
                    value={phoneText}
                    onChange={(e) => setPhoneText(e.target.value)}
                  />
                </div>
                {phoneError && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{phoneError}</AlertDescription>
                  </Alert>
                )}
                <Button onClick={handleCheckPhone} className="w-full">
                  {t.buttonCheck}
                </Button>
                {phoneResult && <StructuredAnalysisResultCard result={phoneResult} />}
              </TabsContent>

              {/* Crypto Tab */}
              <TabsContent value="crypto" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="crypto-input">{t.labelCrypto}</Label>
                  <Input
                    id="crypto-input"
                    placeholder={t.placeholderCrypto}
                    value={cryptoText}
                    onChange={(e) => setCryptoText(e.target.value)}
                  />
                </div>
                {cryptoError && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{cryptoError}</AlertDescription>
                  </Alert>
                )}
                <Button onClick={handleCheckCrypto} className="w-full">
                  {t.buttonCheck}
                </Button>
                {cryptoResult && <StructuredAnalysisResultCard result={cryptoResult} />}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
