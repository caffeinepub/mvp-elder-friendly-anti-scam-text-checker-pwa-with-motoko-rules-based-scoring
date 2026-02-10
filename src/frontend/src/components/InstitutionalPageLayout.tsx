import React from 'react';

interface InstitutionalPageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
}

export function InstitutionalPageLayout({
  children,
  title,
  subtitle,
  description,
}: InstitutionalPageLayoutProps) {
  return (
    <main className="flex-1 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 max-w-5xl">
        <div className="space-y-10 sm:space-y-14">
          {/* Header */}
          <header className="text-center space-y-4 sm:space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-sm sm:text-base text-muted-foreground italic max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </header>

          {/* Content */}
          <div className="institutional-content space-y-8 sm:space-y-10">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
