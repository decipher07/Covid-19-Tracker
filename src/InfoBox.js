import React from 'react'
import { Card, CardContent, Typography} from "@material-ui/core"
import './InfoBox.css'

function InfoBox({title, cases, total}) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* Title ie Coronavirus Cases */}
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                {/* Number of Cases */} 
                <h2 className="infoBox__cases">{cases}</h2>
                {/* 1.2M total */}
                <Typography className="infoBox__total" color="textSecondary">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox