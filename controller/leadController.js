import Lead from "../model/leads.js";
import pool from "../model/conexao.js";

class LeadController {
    static async criarLead(req, res) {
        try {
            const { nome, email } = req.body;
            const lead = new Lead(nome, email);

            const query = 'INSERT INTO leads (nome, email) VALUES (?, ?)';
            await pool.query(query, [lead.nome, lead.email]);
            return res.status(201).json({ message: 'Lead criado com sucesso', lead })
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }


    static async listarLead(req, res) {
        try {
            const query = 'SELECT id, nome, email FROM leads';
            const [results] = await pool.query(query);
            return res.status(200).json(results);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    static async atualizarLead(req, res) {
        try {
            const id = req.params.id;
            const { nome, email } = req.body;
            const query = 'UPDATE leads SET nome = ?, email = ? WHERE id= ?';
            await pool.query(query, [nome, email, id]);
            return res.status(200).json({ message: 'Lead atualizado com sucesso' });
        } catch (error) {
            return res.status(500).json({ error: err.message });
        }
    }

    static async deletarLead(req, res) {
        try {
            const id = req.params.id;
            const query = 'DELETE FROM leads where id = ?';
            await pool.query(query, [id]);
            return res.status(200).json({ message: 'Lead deletado com sucesso' });

        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}

export default LeadController;