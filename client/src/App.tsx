import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-provider";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>John Doe - Senior Software Engineer | Portfolio</title>
        <meta name="description" content="Senior Software Engineer with 9+ years of experience building scalable software solutions. Specializing in .NET, React, and cloud architecture." />
        <meta property="og:title" content="John Doe - Senior Software Engineer" />
        <meta property="og:description" content="Building scalable software solutions for 9+ years. Passionate about clean code, cloud architecture, and creating impactful digital experiences." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="John Doe - Senior Software Engineer" />
        <meta name="twitter:description" content="Building scalable software solutions for 9+ years. Passionate about clean code, cloud architecture, and creating impactful digital experiences." />
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
