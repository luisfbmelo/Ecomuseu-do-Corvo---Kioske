export default (props:any) => `
  h1, h2, h3, h4, h5, h6{
    margin-top:0;
    font-family: ${props.theme.types.title};
    margin-bottom: 15px;
  }

  h1{
    font-size: 5vmin;
  }

  h2{
    font-size: 4.5vmin;
  }

  h3{
    font-size: 4vmin;
  }

  h4{
    font-size: 3.5vmin;
  }

  h5{
    font-size: 3vmin;
  }

  h6{
    font-size: 2.5vmin;
  }

`