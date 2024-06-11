///
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {{name: string, age: number, ticketId: string|null}}  the visitor that was created
 *
 */
function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId,
  };
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {{name: string, age: number, ticketId: string|null}} visitor the visitor with an active ticket
 * @returns {{name: string, age: number, ticketId: string|null}}the visitor without a ticket
 */
function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function ticketStatus(tickets, ticketId) {
  if (!(ticketId in tickets)) {
    return "ticket desconocido";
  } else if (tickets[ticketId] === null) {
    return "no esta vendido";
  } else {
    return "vendido: " + tickets[ticketId];
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? "ticket no valido ";
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {{name: string, age: number, ticketId: string|null, gtc?: {signed: boolean, version: string}}} visitor visitor
 * @returns {string | undefined} version
 */
function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
/*
tuve que cambiar los params de los visitor y demas para que esten definidos para que no me diera ningun error el monitor
*/
