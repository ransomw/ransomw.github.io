%lex
%%

"" {return 'PGBREAK';}
":" {return 'SEMICOLON';}
"["(.|\n)*?"]" {return 'TAG';}
[a-zA-Z0-9]+ {return 'WORD';}
(\n) {return 'NEWLINE';}
(.|\n) {return 'CHAR';}
<<EOF>> {return 'EOF';}

/lex


%start post

%% /* language grammar */

post
    : metadata_line NEWLINE PGBREAK text EOF
        {console.log("parsed post"); return {metadata: $1, post: $3};}
    ;

/*
metadata
		: metadata_line NEWLINE metadata
		  {if ($3[$1.title] !== undefined) {
					throw Error("duplicate metadata titles");
					}
			 metadata = Object.create($3);
			 metadata[$1.title] = $1.data;
			 $$ = metadata; }
		| metadata_line
		  {$$ = {$1.title: $1.data};}
		;
*/

metadata_line
		: metadata_title SEMICOLON metadata_content
		  {$$ = {title: $1, data: $3}; console.log("parsed metadata line"); }
		;

metadata_title
		: WORD
		  {console.log("parsed metadata title as '"+$1+"'"); $$ = $1;}
		;

metadata_content
		: text
		  {console.log("parsed metadata content as '"+$1+"'"); $$ = $1;}
		;

/*
post
		: text
		  {$$ = $1;}
		;
*/

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
