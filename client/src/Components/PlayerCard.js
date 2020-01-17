import React from 'react';
import {Card,CardBody,CardFooter,CardTitle,CardHeader} from 'reactstrap';


const PlayerCard = (props) => {
    console.log(props)

    return(
        <div>
            <Card>
                <CardHeader>Player: {props.name}</CardHeader>
                <CardBody>
                    <CardTitle>Country: {props.country}</CardTitle>
                </CardBody>
                <CardFooter>Searches: {props.searches}</CardFooter>
            </Card>
        </div>

    )


}

export default PlayerCard;