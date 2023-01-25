import {Row,Col} from "react-bootstrap"
import dataAnimes from "../data/dataAnimes.json"
import AnimeItems from "../components/AnimeItems"
import "./Animes.css"

export default function Animes () {

    return (
        <div>
            <h1>Animes of 2023</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {dataAnimes.map(item => (
                    <Col key={item.id}><AnimeItems {...item}/></Col>
                ))}
            </Row>
        </div>
    )
}