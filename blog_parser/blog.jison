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
		| metadata_entry
		  {$$ = [$1];}
		;

metadata_entry
		: metadata_title metadata_content
		  {$$ = [$1, $2]; console.log("parsed metadata line"); }
		;

metadata_title
		: TAG
		  {console.log("parsed metadata title as '"+$1+"'"); $$ = $1;}
		;

metadata_content
		: text
		  {console.log("parsed metadata content as '"+$1+"'"); $$ = $1;}
		;

post_content
		: text
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
