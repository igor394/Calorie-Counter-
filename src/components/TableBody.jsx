import React from 'react';


const TableBody = ({array}) => {

    return(
        <tbody>
        {array.map((item, index) =>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item['Food_Code']}</td>
                <td>{item['Display_Name']}</td>
                <td>{item['Portion_Display_Name']}</td>
                <td>{item['Calories']}</td>
            </tr>)
        }
        </tbody>
    )
};

export default TableBody;