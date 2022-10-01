export const JOB_STATUS = {
    100: {
        label: 'Aguardando Revisão',
        color: 'text-orange-500'
    },
    200: {
        label: 'Publicado',
        color: 'text-teal-500'
    },
    300: {
        label: 'Concluido',
        color: 'text-teal-500'
    },
    400: {
        label: 'Arquivado',
        color: 'text-red-500'
    }
}

export const RATE_TYPE = {
    HOURLY: {
        label: 'Por Hora',
    },
    FIXED: {
        label: 'Fixo',
    },
    // INDII: {
    //     label: 'Indii Squad'
    // },
    MILESTONE: {
        label: 'Por Entrega'
    }
}

export const CONTRACT_TYPES = {
    HOURLY: 'HOURLY',
    FIXED: 'FIXED',
    MILESTONE: 'MILESTONE'
}

export const PAYMENT_CYCLES = [
    {
        key: 'WEEKLY',
        label: 'Semanalmente',
    },
    {
        key: 'BIWEEKLY',
        label: 'Quinzenalmente'
    },
    {
        key: 'MONTHLY',
        label: 'Mensalmente'
    }
]

export const SUBMIT_DOCUMENT_LIMIT = [
    {
        key: '1_DAY',
        label: '1 Dia corrido após fechar o ciclo',
    },
].concat(Array.from(Array(9).keys()).map(i => ({
    key: `${i + 2}_DAYS`,
    label: `${i + 2} Dias corridos após fechar o ciclo`
})))

export const DUE_DATE_LIMIT = [
    {
        key: '1_DAY',
        label: '1 Dia corrido após fechar o ciclo',
    },
].concat(Array.from(Array(14).keys()).map(i => ({
    key: `${i + 2}_DAYS`,
    label: `${i + 2} Dias corridos após fechar o ciclo`
})))


export const CONTRACT_MODEL_TYPE = {
    SELF_UPLOADED_CONTRACT: {
        label: 'Contrato Próprio'
    }
}

export const CONTRACT_STATUS_CODE = {
    100: 'WAITING_CONFIG_PAYMENT',
    110: 'WAITING_CONTRACTOR',
    120: 'WAITING_UPLOAD_CONTRACT',
    200: 'PAYMENT_CYCLE',
    300: 'DONE',
    400: 'ARCHIVED',
}

export const CONTRACT_STATUS = {
    WAITING_CONFIG_PAYMENT: {
        label: 'Aguardando',
        sub_label: 'Configurar Forma de Pagamento',
        color: 'text-orange-500',
        position: 2
    },
    WAITING_CONTRACTOR: {
        label: 'Aguardando',
        sub_label: 'Profissional entrar no projeto',
        color: 'text-orange-500',
        position: 3
    },
    WAITING_UPLOAD_CONTRACT: {
        label: 'Aguardando',
        sub_label: 'Upload do Contrato',
        color: 'text-orange-500',
        position: 4
    },
    PAYMENT_CYCLE: {
        label: 'Ativo',
        sub_label: 'Contrato Ativo',
        color: 'text-teal-500',
        position: 999
    },
    ARCHIVED: {
        label: 'Arquivado',
        sub_label: 'Contrato fechado',
        color: 'text-gray-500',
        position: 999
    },
    DONE: {
        label: 'Concluído',
        sub_label: 'Contrato concluido',
        color: 'text-gray-500',
        position: 999
    }
}

export const USER_TYPES = {
    CLIENT: 'CLIENT',
    CONTRACTOR: 'CONTRACTOR'
}

export const INVOICE_STATUS_CODE = {
    200: 'PAYIN_CREATED',
    210: 'APPROVED',
    300: 'PAYIN_PAID',
    400: 'ARCHIVED'
}

export const INVOICE_STATUS = {
    PAYIN_CREATED: {
        status: 'PAYIN_CREATED',
        color: 'text-yellow-500',
        label: 'Em Aberto',
        description: 'Fatura aguardando aprovação',
    },
    PAYIN_PAID: {
        status: 'PAYIN_PAID',
        color: 'text-teal-500',
        label: 'Fatura Paga',
        description: 'Fatura paga'
    },
    ARCHIVED: {
        status: 'ARCHIVED',
        color: 'text-red-500',
        label: 'Arquivada',
        description: 'Fatura arquivada, para restaurar entre em contato com o suporte'
    },
    APPROVED: {
        status: 'APPROVED',
        color: 'text-indigo-600',
        label: 'Aprovada',
        description: 'Fatura aprovada, aguardando pagamento!'
    },
}


export const BILLING_STATUS_CODE = {
    200: 'EM ABERTO',
    300: 'PAGO',
    401: 'CANCELADO',
}

export const SQUADS_STATUS_CODE = {
    100: 'SOLICITADO',
    110: 'PROJETO EM ANÁLISE',
    200: 'MONTANDO SQUAD',
    230: 'ATIVO',
    400: 'ARQUIVADO',
}

export const MAGIC_WORDS = 'Mercenary@2022'

export const URL_INDII_API = 'https://web-production-9009.up.railway.app'