import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {priceDisplay} from '../../util/util';
import Deal from '../../model/deal/Deal';

interface DealItemProps {
  deal: Deal;
  onPress: any;
}

export default class DealItem extends Component<DealItemProps> {
  constructor(props: DealItemProps) {
    super(props);
  }

  handlePress: any = () => {
    this.props.onPress(this.props.deal.key);
  };

  render() {
    const {deal} = this.props;
    return (
      <TouchableOpacity style={styles.deal} onPress={this.handlePress}>
        <Image source={{uri: deal.media[0]}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.footer}>
            {deal.cause && <Text style={styles.cause}>{deal.cause.name}</Text>}
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});
