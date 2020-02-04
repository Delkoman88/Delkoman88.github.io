alert("Bienvenid@ al futuro de la agricultura!");
var usuario = prompt("Cuál es tu nombre?");
var racks = parseInt(prompt("Cuántos racks te gustaría tener?"));
var superficie = parseInt(prompt("En qué superficie te gustaría tenerlos?\n 1. Patio 2. Azotea 3. Indoor"));
var lechugas;
var sol_patio;
var sol_azotea;
document.write("Hola " + usuario + ", Si te interesa <strong>cuidar el planeta y revolucionar la agricultura</strong>, has llegado al lugar correcto.");
if (superficie == 1)
    {
      sol_patio = parseInt(prompt("En tu patio da el sol al menos 10 horas al día?\n 1. Si  2. No"));
        if (sol_patio == 1)
         {
           lechugas = racks * 200;
           document.write("<br/><br/>En tu patio podrías estar produciendo hasta " + lechugas + " lechugas al mes");
         }
         else if (sol_patio == 2)
         {
            document.write("<br/><br/>Lo sentimos, sin al menos 10 horas de sol al día, no puedes crecer cultivos en tu patio");
         }
         else
         {
           document.write("<br/><br/>Favor de indicar correctamente si tienes al menos 10 horas de sol en tu patio");
         }
    }
else if (superficie == 2)
    {
      sol_azotea = parseInt(prompt("En tu azotea da el sol al menos 10 horas al día?\n 1. Si  2. No"));
        if (sol_azotea == 1)
         {
           lechugas = racks * 200;
           document.write("<br/><br/>En tu azotea podrías estar produciendo hasta " + lechugas + " lechugas al mes");
         }
         else if (sol_azotea == 2)
         {
            document.write("<br/><br/>Lo sentimos, sin al menos 10 horas de sol al día, no puedes crecer cultivos en tu azotea");
         }
         else
         {
           document.write("<br/><br/>Favor de indicar correctamente si tienes al menos 10 horas de sol en tu azotea");
         }
    }
else if (superficie == 3)
    {
      lechugas = racks * 200;
      document.write("<br/><br/>En tu sistema indoor podrías estar produciendo hasta " + lechugas + " lechugas al mes");
    }
  else
    {
      document.write("<br/><br/>Favor de seleccionar una superficie de crecimiento válida");
    }
