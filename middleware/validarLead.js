const validarLead = (req, res, next) => {
    const {nome, email} = req.body;

    if (!nome || typeof nome != 'string' || !/^[A-Za-zÀ-ÿ\s]{2,}$/.test(nome)){
        return res.status(400).json({error:'Nome inválido'});
    }
    if (!email || typeof email != 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        return res.status(400).json({error: 'Email inválido'});
    }
    next();
};

export default validarLead;