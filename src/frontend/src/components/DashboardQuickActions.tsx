import { Button } from '@/components/ui/button';
import { Search, AlertTriangle, Flag } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { PwaInstallAction } from './PwaInstallAction';

interface DashboardQuickActionsProps {
  onCheckRisk: () => void;
  onSearchDatabase: () => void;
  onReport: () => void;
}

export function DashboardQuickActions({ onCheckRisk, onSearchDatabase, onReport }: DashboardQuickActionsProps) {
  const { t } = useI18n();

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
      <Button onClick={onCheckRisk} variant="default" size="sm" className="gap-2">
        <AlertTriangle className="h-4 w-4" />
        <span>{t.quickActionCheckRisk}</span>
      </Button>
      <Button onClick={onSearchDatabase} variant="outline" size="sm" className="gap-2">
        <Search className="h-4 w-4" />
        <span>{t.quickActionSearchDatabase}</span>
      </Button>
      <Button onClick={onReport} variant="outline" size="sm" className="gap-2">
        <Flag className="h-4 w-4" />
        <span>{t.quickActionReportScam}</span>
      </Button>
      <PwaInstallAction />
    </div>
  );
}
