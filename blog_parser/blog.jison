%lex
%%

'' {return 'PGBREAK';}
. {return 'CHAR';}
'\n' {return 'NEWLINE';}
<<EOF>> {return 'EOF';}

/lex


%start post

%% /* language grammar */

post
    : metadata_line PGBREAK text EOF
        {return {metadata: $1, post: $3};}
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
		: metadata_title ':' metadata_content
		  {$$ = {title: $1, data: $3};}
		;

metadata_title
		: text
		  {$$ = $1;}
		;

metadata_content
		: text
		  {$$ = $1;}
		;

/*
post
		: text
		  {$$ = $1;}
		;
*/

text
    : CHAR e
        {$$ = $1 + $2;}
    | CHAR
        {$$ = $1;}
    ;
