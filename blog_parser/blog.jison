%lex
%%

"" {return 'PGBREAK';}
"["(.|\n)*?"]" {return 'TAG';}
[a-zA-Z0-9]+ {return 'WORD';}
/* (\n) {return 'NEWLINE';} */
(.|\n) {return 'CHAR';}
<<EOF>> {return 'EOF';}

/lex


%start post

%% /* language grammar */

post
    : metadata PGBREAK post_content EOF
        {console.log("parsed post"); return {metadata: $1, post: $3};}
    ;

metadata
		: metadata_entry metadata
		  { $2.push($1);
				$$ = $2; }
		/*
		{ $2[$1[0]] = $1[1];
		  $$ = $2; }
		*/
		| metadata_entry
		  {$$ = [[$1[0], $1[1]]];}
		/*  {$$ = {$1[0] : $1[1]};} */
		;

metadata_entry
		: metadata_title metadata_content
		  {$$ = [$1, $2];}
		;

metadata_title
		: TAG
		  {$$ = $1.slice(1,-1);}
		;

metadata_content
		: text
		  {$$ = $1.trim();}
		;

post_content
	  : WORD post_content
        {$$ = $1 + $2;}
    | CHAR post_content
        {$$ = $1 + $2;}
		| TAG post_content
        {$$ = $1 + $2;}
    | WORD
        {$$ = $1;}
    | CHAR
        {$$ = $1;}
    | TAG
        {$$ = $1;}
    ;

text
	  : WORD text
        {$$ = $1 + $2;}
    | CHAR text
        {$$ = $1 + $2;}
    | WORD
        {$$ = $1;}
    | CHAR
        {$$ = $1;}
    ;
