import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import I18n from '../../localization/language';

interface SearchBarProps {
  searchDeals: any;
  searchTerm?: string;
}

export default class SearchBar extends Component<SearchBarProps> {
  constructor(props: SearchBarProps) {
    super(props);
  }

  handleChange: any = (searchTerm: string) => {
    this.props.searchDeals(searchTerm);
  };

  render() {
    return (
      <TextInput
        placeholder={I18n.t('search_all_deals')}
        style={styles.input}
        value={this.props.searchTerm}
        onChangeText={this.handleChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 16,
  },
});
