import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] =useState([]);

// by using two use effects and the debouncedTerm we are making sure that the api is only making one network request at a time, 
// and not after every keystroke (clearTimeout), also if the same word is searched it wont make another request 

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        },500);

        return () => {
            clearTimeout(timerId)
        };
    },[term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                  action: 'query',
                  list: 'search',
                  origin: '*',
                  format: 'json',
                  srsearch: debouncedTerm,
                },
            });
 
            setResults(data.query.search);
        };

        if (debouncedTerm) {
          search();
        }

    }, [debouncedTerm]);


    const renderedResults = results.map((result) => {
        return (
        <div key={result.pageid} className="item">
            <div className="right floated content">
                <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                {/* // dangerouslySetInnerHTML removes unwanted html such as span that appear when pulling information from the api */}
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>   
            </div>
        </div>
        );
    });

    return (
       <div>
           <div className="ui form">
               <div className="field">
                   <label>Enter Search Term</label>
                   <input className="input" value={term} onChange={e => setTerm(e.target.value)}/>
               </div>
           </div>
           <div className="ui celled list">
               {renderedResults}
           </div>
       </div> 
    )
};

export default Search;