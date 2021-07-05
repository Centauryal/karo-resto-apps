const assert = require('assert');

Feature('Liking Restaurant');

Before((I) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', (I) => {
    I.seeElement('#product-list');
    I.see("You don't have any Favorite Restaurant", '#product-list');
});

Scenario('Liking one restaurant', async (I) => {
    I.see("You don't have any Favorite Restaurant", '#product-list');

    I.amOnPage('/');

    I.seeElement('.product-item a');
    const firstTitle = await I.grabTextFrom(locate('.product-title').first());
    I.click(locate('.product-title').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.product-item');
    const likedTitle = await I.grabTextFrom('.product-title');

    assert.strictEqual(firstTitle, likedTitle);
});

Scenario('Unliking one restaurant', async (I) => {
    I.see("You don't have any Favorite Restaurant", '#product-list');

    I.amOnPage('/')

    I.seeElement('.product-item a');
    const firstTitle = await I.grabTextFrom(locate('.product-title').first());
    I.click(locate('.product-title').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.product-item');
    const likedTitle = await I.grabTextFrom('.product-title');

    assert.strictEqual(firstTitle, likedTitle);

    I.click(likedTitle);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('#product-list');

    const noFavorite = await I.grabTextFrom('.favorite-placeholder');

    assert.strictEqual(noFavorite, "You don't have any Favorite Restaurant")
});

Scenario('Customer write review', async (I) => {
    I.see("You don't have any Favorite Restaurant", '#product-list');

    I.amOnPage('/')

    I.seeElement('.product-item a');
    const firstTitle = await I.grabTextFrom(locate('.product-title').first());
    I.click(locate('.product-title').first());

    I.seeElement('.form-review');

    const textReview = 'Testing write review';
    I.fillField('inputName', 'Asikin Aja');
    I.fillField('inputReview', textReview);

    I.click('#submit-review');

    const lastReview = await I.grabTextFrom(locate('.review-desc').last());

    assert.strictEqual(textReview, lastReview);
})


