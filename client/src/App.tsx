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
        <title>Ivona Malekovic Selimovic - Software Developer | Portfolio</title>
        <meta name="description" content="Software Engineer with 7+ years' experience specializing in React frontend development. Earlier experience in Angular and .NET, with a focus on AI-assisted development." />
        <meta property="og:title" content="Ivona Malekovic Selimovic - Software Developer" />
        <meta property="og:description" content="Software Engineer with 7+ years' experience specializing in React frontend development and AI-assisted development." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ivona Malekovic Selimovic - Software Developer" />
        <meta name="twitter:description" content="Software Engineer with 7+ years' experience specializing in React frontend development and AI-assisted development." />
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
