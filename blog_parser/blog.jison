%lex
%%

"" {return 'PGBREAK';}
"[/"(.|\n)*?"]" {return 'END_TAG';}
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
		  { if (typeof $2[0] == "string") {
					$2[0] = $1 + $2[0];
				} else {
					$2.unshift($1);
				}
				$$ = $2; }
    | CHAR post_content
		  { if (typeof $2[0] == "string") {
					$2[0] = $1 + $2[0];
				} else {
					$2.unshift($1);
				}
				$$ = $2; }
		| post_tag post_content
		  { $2.unshift($1);
				$$ = $2; }
    | WORD
        {$$ = [$1];}
    | CHAR
        {$$ = [$1];}
    | post_tag
        {$$ = [$1];}
    ;

post_tag
		: TAG text END_TAG
		  {
			var start_tag_contents = $1.slice(1,-1);
			var end_tag_name = $3.slice(2,-1);
			var start_tag_split = start_tag_contents.split('=');
		  var start_tag_name = start_tag_split[0];
			if (start_tag_name != end_tag_name) {
				 // TODO: replace with parse error
				 throw new Error("start tag '"+
				 			start_tag_name+"' does not match end tag name '"+
							end_tag_name);
			}
			var return_obj = {tag : start_tag_name, text : $2};
			if (start_tag_split.length >= 2) {
				 // TODO: multiple equal signs in start tag
				 return_obj['val'] = start_tag_split[1];
			}
			$$ = return_obj;}
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
