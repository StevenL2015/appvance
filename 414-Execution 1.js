setVariablesIfNeeded("{ds}/dpl.csv", "HashDPL", 0);
setFailOnValidations(true);
prepareDomain($baseURL);
prepareDomain("https://demosite.appvance.net/");
setShadowDOM(true);
setFindOnlyVisible(true);
setFindOnlyEnabled(true);
selectMainFrame();
navigateTo($baseURL);
click(link("Bags"));
click(link(0, _in(figure("logo"))));
