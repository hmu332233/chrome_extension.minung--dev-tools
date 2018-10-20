class FeatureSelector {
  constructor(selectedIndex = 0) {
    this.$featureButtons = document.querySelectorAll('.features__button');

    this.selectedIndex = selectedIndex;
    this.featureLength = this.$featureButtons.length;
  }

  increaseIndex() {
    let nextIndex = this.selectedIndex + 1;
    if (nextIndex >= this.featureLength) {
      nextIndex = 0;
    }

    this.selectedIndex = nextIndex;
  }

  decreaseIndex() {
    let nextIndex = this.selectedIndex - 1;
    if (nextIndex < 0) {
      nextIndex = this.featureLength - 1;
    }

    this.selectedIndex = nextIndex;
  }
  selectNextFeature() {
    this.removeSelected();
    this.increaseIndex();
    this.addSelected();
  }

  selectPrevFeature() {
    this.removeSelected();
    this.decreaseIndex();
    this.addSelected();
  }

  addSelected(selectedIndex = this.selectedIndex) {
    this.$featureButtons[selectedIndex].classList.add('selected');
  }

  removeSelected() {
    const $selectedFeatureButton = document.querySelector('.features__button.selected');
    $selectedFeatureButton.classList.remove('selected');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const featureSelector = new FeatureSelector();
  document.body.addEventListener('keydown', (e) => {
    if (e.keyCode == '37') {
      featureSelector.selectPrevFeature();
    }
    else if (e.keyCode == '39') {
      featureSelector.selectNextFeature();
    }
  });
});