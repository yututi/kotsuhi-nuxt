<template>
  <app-form v-if="data">
    <app-field label="日付">
      <app-datepicker v-model="date" :baseDate="baseDate" />
    </app-field>
    <app-field label="用務先">
      <input type="text" autocomplete maxlength="30" v-model="modifiedData.contact" />
    </app-field>
    <app-field label="出発">
      <input type="text" autocomplete maxlength="30" v-model="modifiedData.from" />
    </app-field>
    <app-field label="到着">
      <input type="text" autocomplete maxlength="30" v-model="modifiedData.to" />
    </app-field>
    <app-field label="交通手段">
      <app-select class="w-100" :options="options" v-model="modifiedData.transportation"></app-select>
    </app-field>
    <app-field label="往復">
      <app-check v-model="modifiedData.isRoundTrip"></app-check>
    </app-field>
    <app-field label="費用" unit="円">
      <app-input-num v-model="modifiedData.cost" />
    </app-field>
    <app-field>
      <textarea class="k-textarea" placeholder="備考" rows="5" v-model="modifiedData.memo"></textarea>
    </app-field>
    <div class="k-form__btns">
      <app-btn-group>
        <app-btn v-if="data.id" outline theme="error" label="削除" @click="onDelete" />
        <app-btn :label="data.id?'更新':'登録'" outline @click="onUpdate" />
      </app-btn-group>
    </div>
  </app-form>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import AppBtn from "@/components/Btn.vue";
import AppBtnGroup from "@/components/BtnGroup.vue";
import AppCheck from "@/components/Check.vue";
import AppForm from "@/components/Form.vue";
import AppField from "@/components/Field.vue";
import AppSelect from "@/components/Select.vue";
import AppDatepicker from "@/components/DatePicker.vue";
import AppInputNum from "@/components/InputNum.vue";
import { Input, defaultInput, TransportationTypes } from "@/types/index";

const options = TransportationTypes;

@Component({
  components: {
    AppBtn,
    AppBtnGroup,
    AppCheck,
    AppField,
    AppForm,
    AppSelect,
    AppDatepicker,
    AppInputNum
  }
})
export default class KotsuhiForm extends Vue {
  @Prop({ required: true })
  data!: Input;

  @Prop({ required: true })
  baseDate!: Date;

  modifiedData: Input = defaultInput();

  get date() {
    const date = this.modifiedData.date;
    return date ? [date] : [];
  }

  set date(value) {
    this.modifiedData.date = value[0];
  }

  get options() {
    return options;
  }

  get cost() {
    return this.modifiedData.cost;
  }

  get roundTrip() {
    return this.modifiedData.isRoundTrip;
  }

  onUpdate() {
    this.$emit("update", this.modifiedData);
  }
  onDelete() {
    if (this.data) {
      this.$emit("delete", this.data.id);
    }
  }

  mounted() {
    this.modifiedData = { ...this.data }; // shallow copy
  }
}
</script>
<style lang="scss">
@import "../styles/base.scss";
.k-form {
  box-sizing: border-box;
  width: 30vw;
  min-width: 340px;

  @include sp {
    width: 100%;
    min-width: 240px;
  }
}
.w-100 {
  width: 100%;
}
</style>