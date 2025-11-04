import { useState } from 'react'
import AssetFigure from "./AssetFigure"
import AssetGraphAndStatus from './AssetGraphAndStatus'
import AssetFacesAndCommands from './AssetFacesAndCommands'
import AssetStoryImages from './AssetStoryImages'

export default function ServantAssets( {extraAssets} ) {

    const [loadFigures, setLoadFigures] = useState(false)
    const [loadGraph, setLoadGraph] = useState(false)
    const [loadFaceCommand, setFaceCommand] = useState(false)
    const [loadImages, setImages] = useState(false)

    const { charaGraph, faces, narrowFigure, charaFigure, commands, status, image } = extraAssets

    const handleFigures = () => {
        setLoadFigures(!loadFigures)
    }

    const handleMainAssets = () => {
        setLoadGraph(!loadGraph)
    }

    const handleFacesCommands = () => {
        setFaceCommand(!loadFaceCommand)
    }

    const handleImages = () => {
        setImages(!loadImages)
    }

    return (
        <>
            <button className="asset-btns" onClick={handleMainAssets}>Ascensions & Statuses</button>
            {loadGraph && <AssetGraphAndStatus charaGraph={charaGraph} status={status} />}

            <button className="asset-btns" onClick={handleFacesCommands}>Faces & Commands</button>
            {loadFaceCommand && <AssetFacesAndCommands faces={faces} commands={commands} />}

            <button className="asset-btns" onClick={handleFigures}>Figures</button>
            {loadFigures && <AssetFigure narrowFigure={narrowFigure} charaFigure={charaFigure} />}

            <button className="asset-btns" onClick={handleImages}>Images (Story/Event)</button>
            {loadImages && <AssetStoryImages image={image} />}
        </>
    )
}