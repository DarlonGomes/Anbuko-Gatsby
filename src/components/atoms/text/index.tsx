import * as React from 'react';
import './styles.scss';

interface TextProps{
    children: string
}
export default function Text ({children} : TextProps){
    return(
        <p className='generaltext'>{children}</p>
    )
}