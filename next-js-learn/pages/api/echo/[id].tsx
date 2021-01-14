import {NextApiRequest, NextApiResponse} from "next";

interface IdNextApiRequest {
    query:{
        id: string
    }
}

export default function getByID(req: IdNextApiRequest, res:NextApiResponse) {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json')
    // res.end(req.query.id)

    //Автоматически проставляет хедеры и контент туре
    res.json({yourId: req.query.id})
}