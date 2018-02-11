---
layout: post
title:  "Logics for Informatics"
date:   2018-02-09 00:00:00 +0100
categories: education logics
---
**Logics Operators (symbols)**  
![logics-operators]({{"/assets/img/logics-operators.png"|absolute_url}})
cercare su google: provable symbols
Questo in pratica dovrebbe voler dire che dal sistema lambda è possibile
dimostrare ...

Logics is a very interesting environment although it is not clear where
boundaries come from and what is the sequence of concepts a student needs to
master before, during and after the course period.

![logica]({{"/assets/img/banner-logica.png" | absolute_url}})

The main focus of the logics at informatics is to explain what is computation.

What is descriptive complexity?

The least-fixed-point operator, which formalizes the power of making inductive
definitions.

**Second-Order logic**
Second-order logic consist of first-order logic plus the power to quantify
over relations on the universe.

![second-oder-logic]({{"/assets/img/second-order-logic.png" | absolute_url}})

**Fagin theorem**
Says that the queries computable in NP are exactly the second-order existential
queries. A corollary do to Stockmeyer says that second-order queries are exactly
those computable in the polynomial-time hierarchy.

**Interleaving**

![system-banner]({{"/assets/img/logics-systems-banner.png" | absolute_url}})

**Struttura di Kripke**
![kripke]({{"/assets/img/kripke.png" | absolute_url}})

**Oral Exams**
Dimostrare che per ogni formula esiste un algoritmo NP.

What is pi_greco, mi pare di averla vista della complessità mannaggia

ELENCO CONCETTI PER L’ESAME ORALE DI FONDAMENTI LOGICI DELL’INFORMATICA

TEORIA
•	Verifica di sistemi (in a general sense)
•	Le macchine di turing sono tutto fuorchè modulari. Combinazione di macchine di turing. Con le funzione c’è la composizione!!!
•	Qual è la più semplice struttura in matematica? I numeri naturali!
Preparativi per il teorema di Bohm

![teorie-equazionali]({{"/assets/img/teorie-equazionali.png"| absolute_url}})

Logica e Verifica (di sistemi)
MATEMATICA
KRIPKE = M = (S, S_0, R, L)
S = insieme di stati – S_0 \subset S – R = relazione di transizione – L = funzione di etichettatura
AP = Insieme di proposizioni atomiche che catturano le proprietà di interesse di uno stato
S = Sistema (sua descrizione)  si fa considerare come un’interpretazione della formula P
P = una proprietà attesa    si fa considerare come una formula di una particolare logica
Verificare che S soddisfi P
Verifica fatta in modo automatico
Maybe = indecidibile   approssimazione del problema

Model checking =
Come faccio a dire cos’è interpretazione per il sistema?
Qual è la logica adatta a specificare P


Logica e basi di dati

Dominio = relazioni ok

Query = ??? funzione. Com’è fatta?
Intanto il risultato è una relazione

Che funzione calcola una query?
La base di dati è vista come una sequenza di relazioni ( quindi una ennupla di tutte le R)


Che espressività deve avere il linguaggio?


MATEMATICA
Let D be SET generico dominio
D = GENERICO DOMINIO – IL TIPO DI DATO DEL CAMPO
R = SOTTO INSIEME

MODELLO RELAZIONALE IN LOGICA DEGLI INSIEMI
Let D be SET – generic dominio
Let D_1, D_n be SET - domini
Let D_i be SET – rappresenta uno di quelli precedenti
Let D^n be SET
Let D^n = D_1 x … x D_n
Let R be SET
Let R \subset D^n

Insieme delle parti finite???


DOMANDE fatte all'esame e bocciato
Database: datalog, passaggi da algebra relazionale a datalog o non so consa
Verifica: CTL e CTL* e come si passa da uno all'altro.

![datalog]({{"/assets/img/datalog.png" | absolute_url}})
