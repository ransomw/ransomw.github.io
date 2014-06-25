%-----
%	PACKAGES AND OTHER DOCUMENT CONFIGURATIONS
%-----

\documentclass{resume} % Use the custom resume.cls style

\usepackage[left=0.75in,top=0.6in,right=0.75in,bottom=0.6in]{geometry} % Document margins

{{#contact}}
\name{ {{name}} }
%\address{123 Broadway \\ City, State 12345} % Your address
%\address{(388)~$\cdot$~051~$\cdot$~9242 \\ auvergnerw@gmail.com}
\address{ {{phone}} \\ {{email}} }
{{/contact}}

\begin{document}

%-----
%	EDUCATION SECTION
%-----

{{#schools}}

\begin{rSection}{ {{heading}} }

{{#list}}
{\bf {{name}} } \hfill {\em {{date}} } \\
{{major}} \smallskip \\
{{#courses}}
  {{name}}
{{/courses}}
\vspace{0.5em}
{{/list}}

\end{rSection}

{{/schools}}


%-----
%	RESEARCH EXPERIENCE SECTION
%-----

{{#research}}

\begin{rSection}{ {{heading}} }

{{#list}}
\begin{rSubsection}{ {{name}}, {{location}} }{ {{date}} }
{ {{major}} , {{advisor}} }{}
{{#items}}
  \item {{{name}}}
{{/items}}
\end{rSubsection}
{{/list}}

\end{rSection}

{{/research}}

%-----
%	WORK EXPERIENCE SECTION
%-----

{{#experience}}

\begin{rSection}{ {{heading}} }

{{#list}}
\begin{rSubsection}{ {{company}} }{ {{start-date}} - {{end-date}} }{ {{title}} }{ {{location}} }
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

\begin{rSection}{ {{heading}} }

\begin{tabular}{ @{} >{\bfseries}l @{\hspace{6ex}} l }
{{#list}}
  {{type}} & {{items}} \\
{{/list}}
\end{tabular}

\end{rSection}

{{/skills}}

\end{document}
