import React from "react"

import Shop_data from "./shop.data"

import CollectionPreview from "../../components/previewcollection/CollectionPreview.component"

class ShopPage extends React.Component {
    constructor() {
        super()
        this.state={
            collections: Shop_data
        }
    }
    render(){
        const {collections} = this.state ;
        return(
            <div className =  "shop-page">
            {collections.map(({id,...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps}/>  
            ))}
            {
                collections.map
            }

            </div>
        )
    }
}

export default ShopPage