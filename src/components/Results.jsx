function Results({result}) {
  return (
    <div>
      {result.map(res=>(
        <div key={res.id}>
          <h1>{res.original_title}</h1>
        </div>
      ))}
    </div>
  )
}

export default Results