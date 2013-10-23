%lex
%%

. {return 'CHAR';}
<<EOF>>               {return 'EOF';}

/lex


%start post

%% /* language grammar */

post
    : e EOF
        {return $1;}
    ;

e
    : CHAR e
        {$$ = $1 + $2;}
    | CHAR
        {$$ = $1;}
    ;
