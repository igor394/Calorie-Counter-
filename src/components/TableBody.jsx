import React from 'react';


const TableBody = ({array}) => {

    return (
        <tbody>
        {array.map((item, index) => {
            if (index > 0 && item.Display_Name !== array[index - 1].Display_Name) {
                return <tr key={index} style={{borderTop: '2px solid black'}}>
                    <td>{index + 1}</td>
                    <td>{array[index]['Food_Code']}</td>
                    <td>{array[index]['Display_Name']}</td>
                    <td>{array[index]['Portion_Display_Name']}</td>
                    <td>{array[index]['Calories']}</td>
                </tr>
            } else {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{array[index]['Food_Code']}</td>
                    <td>{array[index]['Display_Name']}</td>
                    <td>{array[index]['Portion_Display_Name']}</td>
                    <td>{array[index]['Calories']}</td>
                </tr>
            }
        })
        }
        </tbody>
    )
};

export default TableBody;


