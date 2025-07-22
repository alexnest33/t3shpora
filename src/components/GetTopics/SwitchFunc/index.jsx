const SwitchFunc = ({title,content}) => {

   const switchers = (title,content = []) => {
        return content.map(item => {
            const [[tag,text]] = Object.entries(item);
            switch(tag){
                case 'p': { return <p>{text}</p>; }
                case 'h1': { return <h1>{text}</h1>; }
                case 'h2': { return <h2>{text}</h2>; }
                case 'h3': { return <h3>{text}</h3>; }
                case 'c': { return <pre><code>{text}</code></pre>; }
                case 'ul': { return <ul>{text.map(i => <li key={i}>{i}</li>)}</ul> }
                case 'b': {return <b>{text}</b>}
                default: { return JSON.stringify(text); }
            }
        })
}

    return(
        <>
<h1>{title}</h1>
{switchers(content)}

        </>
    )

}