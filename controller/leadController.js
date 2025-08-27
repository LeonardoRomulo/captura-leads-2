import Lead from "../model/leads.js";
import pool from "../model/conexao.js";

class LeadController {
    static criarLead(req,res){
        const {nome, email} = req.body;
        const lead = new Lead(nome,email);

        const query = 'INSERT INTO leads (nome, email) VALUES (?, ?, ?)';

        pool.query(query, [lead.nome, lead.email], (err, results) => {
            if(err)return res.status(500).json({error: err.message});
            res.status(201).json({message: 'Lead criado com sucesso', lead})
        })
    }

    static listarLead(req,res){
        const query = 'SELECT nome,emil FROM leads';

        pool.query (query, (err, results) => {
            if(err) return res.status(500).json({error: err.message});
            res.status(201).json(results);
        })
    }
}

export default LeadController;