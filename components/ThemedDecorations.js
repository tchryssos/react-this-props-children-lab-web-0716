const React=require('react')

class ThemedDecorations extends React.Component {
  render(){
    const namedChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return(
      <div>{namedChildren}</div>
    )
  }
}
module.exports=ThemedDecorations
