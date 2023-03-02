import React from "react";

export default function tableFun(){
    return <table style={{  borderCollapse: "collapse", width: "100%"}}>
        <thead>
            <th style={{border:"1px solid"}}>test</th>
        </thead>
        <tbody>
            <tr style={{border:"1px solid"}}>
                <td style={{border:"1px solid"}}>123</td>
                <td style={{border:"1px solid"}}>456</td>
                <td style={{border:"1px solid"}}>789</td>
            </tr>
        </tbody>
    </table>
}