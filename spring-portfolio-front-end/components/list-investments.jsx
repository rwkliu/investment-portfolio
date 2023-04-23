export default function ListInvestments({ investments }) {
  return (
    <div className="row">
      <table className="table table-bordered" style={{textAlign: "center", color: "white"}}>
        <thead>
          <tr>
            <th>Investment Name</th>
            <th>Investment Type</th>
            <th>Funds Invested</th>
            <th>Date Invested</th>
          </tr>
        </thead>
        <tbody>
          {
            investments.map(
              investment =>
              <tr key={investment.id}>
                <td>{investment.name}</td>
                <td>{investment.type}</td>
                <td>{investment.funds}</td>
                <td>{investment.date}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}