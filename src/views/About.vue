<template>
  <div class="box">
    <div class="notification is-danger is-light">
      <button class="delete"></button>
      <h4 class="title">Descargo de responsabilidad</h4>
      <p>
        Consultar siempre con su medico de cabecera. Esta web es solo de
        consulta
      </p>
    </div>

    <article class="message">
      <div class="message-header">
        <p>Información importante</p>
      </div>
      <div class="message-body">
        <ul class="list">
          <li class="list-item">
            Los antitérmicos tienen que administrarse de la manera correcta y
            según indican los médicos, pediatras y prospecto del medicamento.
            Por eso es importante utilizar una calculadora de paracetamol
            (calculadora apiretal) para saber cuánto deben tomar. Tened especial
            cuidado ya que los niños son más sensibles a reacciones, sobredosis
            y mala administración de medicación.
          </li>

          <li class="list-item">
            El paracetamol no debe darse a menores de 3 meses sin revisión
            médica, y el ibuprofeno no se debe utilizar hasta los 6 meses de
            vida. (No uséis el paracetamol como prevención a la reacción de las
            vacunas).
          </li>
          <li class="list-item">
            Para calcular la dosis apiretal hay que multiplicar por 0,15 el peso
            del niño. La dosis recomendada de paracetamol es de 60 mg/kg/día,
            por lo que serían 15 mg/kg cada 6 horas.
          </li>
          <li class="list-item">
            Calcular la dosis de Dalsy es sencillo. Hay que dividir el peso del
            bebé entre tres y el resultado serán los miligramos de ibuprofeno
            que deberás administrar cada ocho horas. Por ejemplo, si tu bebé
            pesa 10 kg, la dosis de dalsy serían 3,3ml cada 8 horas.
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
