﻿using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MindPlus.Empresa;
using static MindPlus.Usuario.EnumUsuario;

namespace MindPlus.Usuario
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string? Telefone { get; set; }
        public string? Endereco { get; set; }
        public Empresa Empresa { get; set; }
        public StatusAtivoInativo Status { get; set; }
        public FuncaoUsuario Funcao { get; set; }


        public Usuario(int id,
                        string nome, 
                        string email, 
                        string senha, 
                        string telefone, 
                        string endereco,
                        Empresa.Empresa empresa,
                        StatusAtivoInativo status,
                        FuncaoUsuario funcao)
        {
            Contract.Requires<ArgumentException>(!string.IsNullOrEmpty(nome), "O nome do usuário não pode ser nulo ou vazio.");
            Contract.Requires<ArgumentException>(!string.IsNullOrEmpty(email), "O e-mail do usuário não pode ser nulo ou vazio.");
            Contract.Requires<ArgumentException>(!string.IsNullOrEmpty(senha), "A senha do usuário não pode ser nula ou vazia.");
            Contract.Requires<ArgumentException>(empresa != null, "O usuário deve ser vinculado à uma Empresa.");

            if (!Enum.IsDefined(typeof(StatusAtivoInativo), status))
                throw new ArgumentException("Valor inválido para o enum StatusAtivo.", nameof(status));

            if (!Enum.IsDefined(typeof(FuncaoUsuario), funcao))
                throw new ArgumentException("Valor inválido para o enum FuncaoUsuario.", nameof(funcao));

            Id = id;
            Nome = nome;
            Email = email;
            Senha = senha;
            Telefone = telefone;
            Endereco = endereco;
            Empresa = empresa;
            Status = status;
            Funcao = funcao;
        }
    }
}
