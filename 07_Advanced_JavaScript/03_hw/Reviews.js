const Reviews = {
    addReviews(nameProduct, review) {
        if (this.nameProduct) {
            this.nameProduct = [...this.nameProduct, review];
        }else {
            this.nameProduct = [review]
        }

    },
}

Reviews.addReviews("банан", "оранжевый");
Reviews.addReviews("банан", "вкусный");
console.log(Reviews.nameProduct)
