import StatusColor from "./StatusColor";

const TransactionTable=(props)=>{
    return(
        <>
        <div className="table-container">
            <h3 className="table-title">Active Deposits</h3>
            <p className="transaction-no">2</p>
            <button type="button" className="add-btn">+</button>

            <table width="80%">
            <thead>
                <tr>
                    
                    <th>participents</th>
                    <th>MOVE IN DATE</th>
                    <th>RENT</th>
                    <th>DEPOSIT</th>
                    <th>STATUS
                       
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>771 Lost Round</td>
                        <td>23 February 2020</td>
                        <td>$3000</td>
                        <td>$9000</td>
                        <td>Awating Bank Processing <StatusColor color="#6dc17f"/></td>
                    </tr>
                    <tr>
                        <td>771 Lost Round</td>
                        <td>23 February 2020</td>
                        <td>$3000</td>
                        <td>$9000</td>
                        <td>Done <StatusColor color="#e98271"/></td>
                    </tr>
                </tbody>
            </table>

            <div  className="active-btn"><button type="button">All Active Deposite</button></div>
            
        </div>
        <hr/>
        <div className="table-container">
            <h3 className="table-title">Closed Deposits</h3>
            <p className="transaction-no">8</p>
            <button type="button" className="add-btn">+</button>

            <table width="80%">
            <thead>
                <tr>
                    
                    <th>participents</th>
                    <th>MOVE IN DATE</th>
                    <th>RENT</th>
                    <th>DEPOSIT</th>
                    <th>STATUS
                       
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>771 Lost Round</td>
                        <td>23 February 2020</td>
                        <td>$3000</td>
                        <td>$9000</td>
                        <td>Awating Bank Processing <StatusColor color="#facd51"/></td>
                    </tr>
                    <tr>
                        <td>771 Lost Round</td>
                        <td>23 February 2020</td>
                        <td>$3000</td>
                        <td>$9000</td>
                        <td>Awating Bank Processing <StatusColor color="red"/></td>
                    </tr>
                </tbody>
            </table>

            <div  className="active-btn"><button type="button">Closed Deposite</button></div>
        </div>
        </>
    )
}
export default TransactionTable;