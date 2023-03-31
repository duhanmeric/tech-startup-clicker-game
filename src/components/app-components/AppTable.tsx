type AppTableProps = {
  headers: string[];
  body: Array<string[]>
}

const AppTable = ({ headers, body }: AppTableProps) => {
  const renderBody = () => {
    if (body.length > 0) {
      return (
        body.map((row, i) => (
          <tr key={i}>
            {
              row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))
            }
          </tr>
        ))
      )
    } else {
      return (
        <tr>
          <td colSpan={headers.length} style={{ textAlign: "center" }}>
            Nothing to see
          </td>
        </tr>)
    }
  }

  return (
    <table>
      <thead>
        <tr>
          {
            headers.map((head, index) => (
              <th key={index}>{head}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          renderBody()
        }
      </tbody>
    </table>
  )
}

export default AppTable