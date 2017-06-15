%-----
%	PACKAGES AND OTHER DOCUMENT CONFIGURATIONS
%-----

\documentclass{resume} % Use the custom resume.cls style

% Document margins
\usepackage[left=0.75in,top=0.6in,right=0.75in,bottom=0.6in]{geometry}

{{#contact}}

%%%%% moustache template api note %%%%%
%%%%% triple-stach prevents escaping %%

\name{ {{{name}}} }
%\address{123 Broadway \\ City, State 12345} % Your address
%\address{(388)~$\cdot$~051~$\cdot$~9242 \\ auvergnerw@gmail.com}
\address{ {{{phone}}} \\ {{{email}}} \\ {{{website}}} }
{{/contact}}

\begin{document}

%-----
%	EDUCATION SECTION
%-----

{{#schools}}

\begin{rSection}{ {{{heading}}} }

{{#list}}
{\bf {{{name}}} } \hfill {\em {{{date}}} } \\
{{{major}}} {{#courses}} \smallskip \\
{{#list}}
  {{{name}}} \\
{{/list}}
{{/courses}}
\\
{{/list}}

\end{rSection}

{{/schools}}

%-----
%	WORK EXPERIENCE SECTION
%-----

{{#experience}}

\begin{rSection}{ {{{heading}}} }

{{#list}}
\begin{rSubsection}{ {{{company}}} }{ {{{start-date}}} -- {{{end-date}}} }{ {{{title}}} }{ {{{location}}} }
{{#items}}
  \item {{{name}}}
{{/items}}
\end{rSubsection}
{{/list}}

\end{rSection}

{{/experience}}


%-----
%	TECHNICAL STRENGTHS SECTION
%-----

{{#skills}}

\begin{rSection}{ {{{heading}}} }

\begin{itemize}
{{#list}}
  \item {{{type}}} -- {{{items}}}
{{/list}}
\end{itemize}


\end{rSection}

{{/skills}}


\pagebreak

%-----
% ACTIVITIES SECTION
%-----

{{#activities}}

\begin{rSection}{ {{{heading}}} }

%% {{#list}}
%% {\bf {{{name}}} } \hfill {\em {{{start-date}}} -- {{{end-date}}} } \\
%% {{{description}}}
%% {{/list}}

{{#list}}
\begin{rSubsection}{ {{{name}}} }{ {{{start-date}}} -- {{{end-date}}} }{.}{ {{{location}}} }
\item {{{description}}}
\end{rSubsection}
{{/list}}


\end{rSection}

{{/activities}}


%% %-----
%% %	RESEARCH EXPERIENCE SECTION
%% %-----

%% {{#research}}

%% \begin{rSection}{ {{{heading}}} }

%% {{#list}}
%% \begin{rSubsection}{ {{{name}}}, {{{location}}} }{ {{{date}}} }
%% { {{{major}}} , {{{advisor}}} }{}
%% {{#items}}
%%   \item {{{name}}}
%% {{/items}}
%% \end{rSubsection}
%% {{/list}}

%% \end{rSection}

%% {{/research}}

\end{document}
