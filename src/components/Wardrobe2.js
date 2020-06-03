import Article from "./Article";
import React, { Component } from 'react';

class Wardrobe2 extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ]
    const filteredWardrobe = wardrobe.filter(w => w.color === 'blue')
    return(
      filteredWardrobe.map(w => <Article key = {filteredWardrobe.indexOf(w)} info={w} />)

      
    )

  }
}

export default Wardrobe2