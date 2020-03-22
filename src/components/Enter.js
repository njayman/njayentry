import React, { useState } from 'react';

const Enter = () => {
    const [entry, setEntry] = useState([

    ])
    const [enter, setEnter] = useState({ title: '', myentry: '' })
    const onChange = (event) => {
        setEnter({ ...enter, [event.target.name]: event.target.value });
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (enter.title.trim() === '' || enter.myentry.trim() === '') return;

        const newEnter = {
            title: enter.title.trim(),
            myentry: enter.myentry.trim()
        }

        setEntry([...entry, newEnter]);
        setEnter({ title: '', myentry: '' });
    };
    return (
        <div>
            <h1>Your Entry</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" placeholder="Entry title" value={enter.title} onChange={onChange} />
                <input type="text" name="myentry" placeholder="enter your entries" value={enter.myentry} onChange={onChange} />
                <button type="submit">Submit</button>
            </form>
            <h1>Entries</h1>
            {entry.map(ent => (
                <div key={Math.random() * 10000} className="card">
                    <div className="card-header">{ent.title}</div>
                    <div className="card-body">
                        <p>{ent.myentry}<br /></p>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default Enter;