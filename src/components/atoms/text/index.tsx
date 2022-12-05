import * as React from 'react';
import './styles.scss';

interface TextProps{
    content: JSX.Element
}
export default function Text ({content} : TextProps){
    return(
        <p>{content}</p>
    )
}