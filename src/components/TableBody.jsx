import React from 'react';


const TableBody = ({array}) => {

    let out = [];
    for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i].Display_Name !== array[i - 1].Display_Name) {
            out.push(<tr key={i} style={{borderTop: '2px solid black'}}>
                <td>{i + 1}</td>
                <td>{array[i]['Food_Code']}</td>
                <td>{array[i]['Display_Name']}</td>
                <td>{array[i]['Portion_Display_Name']}</td>
                <td>{array[i]['Calories']}</td>
            </tr>)
        } else {
            out.push(<tr key={i}>
                <td>{i + 1}</td>
                <td>{array[i]['Food_Code']}</td>
                <td>{array[i]['Display_Name']}</td>
                <td>{array[i]['Portion_Display_Name']}</td>
                <td>{array[i]['Calories']}</td>
            </tr>)
        }
    }

    return (
        <tbody>
            {out}
        </tbody>
    )
};

export default TableBody;


