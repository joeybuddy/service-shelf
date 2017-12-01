<template>
    <div>
        <div>My Subscriptions</div>

        <ul>
            <li v-for="subscription in subscriptions" v-bind:key="subscription.id">{{ subscription.serviceName }} {{ subscription.price }}</li>
        </ul>
        <div>Average:</div>
    </div>

</template>

<script>
export default {
  data: function() {
    return {
      message: "Displays your subscriptions",
      subscriptions: [
        {
          id: 1,
          serviceName: "Evernote Premium",
          remainingTime: 7,
          remainingTimeUnit: "month",
          price: 88,
          currency: "CNY"
        }
      ]
    };
  },
  methods: {
    addSubscription: function() {}
  }
};
</script>
