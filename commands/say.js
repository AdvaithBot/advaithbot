exports.name = "say"
exports.level = 0; 


exports.command = function(client, message) {

  // Dont reply at all if bot uses the command, in >terminal_ server
  if(message.author.bot&&message.guild.id==330777295952543744)
  return 
  
  if(message.author.bot)
  return message.channel.send('Nice try, but bots can\'t use the say command.')
  
  // Permission check
       if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')){
          message.channel.send(':warning: I don\'t have the `Manage Messages` permission! I need this to run the say command best.')
 }
  
  message.channel.send(message.content.split(' ').slice(1).join(' '))
  message.delete().catch(O_o=>{});
  
}